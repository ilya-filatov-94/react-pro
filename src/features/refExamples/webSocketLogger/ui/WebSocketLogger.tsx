import { type FC, useEffect, useRef, useState } from 'react';
import { Card, Button } from '@mui/material';
import { type Log } from '../model/types';
import styles from './WebSocketLogger.module.css';

export const WebSocketLogger: FC = () => {
  const socketRef = useRef<WebSocket | null>(null);
  const [isConnected, setConnected] = useState(false);
  const [logs, setLogs] = useState<Log[]>([{ id: '', time: '', msg: '' }]);

  useEffect(() => {
    const socket = new WebSocket('wss://echo.websocket.org');
    socketRef.current = socket;

    socket.onopen = () => setConnected(true);
    socket.onclose = () => setConnected(false);

    socket.onmessage = event => {
      const inComingText = event.data;
      console.log('Новое сообщение от сервера:', inComingText);

      setLogs(prev => [
        {
          id: crypto.randomUUID(),
          time: new Date().toLocaleDateString(),
          msg: `Входящее (Эхо): "${inComingText}"`,
        },
        ...prev,
      ]);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, []);

  const sendMessage = (text: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(text);

      setLogs(prev => [
        {
          id: crypto.randomUUID(),
          time: new Date().toLocaleDateString(),
          msg: `Отправлено: "${text}"`,
        },
        ...prev,
      ]);
    }
  };

  return (
    <div className={styles.WrapperContent}>
      <Card title="WebSocketLogger">Консоль сообщений:</Card>
      <div className={styles.container}>
        <div className={styles.terminal}>
          {logs.length === 0 && (
            <div className={styles.terminalLine}>
              # Ожидание подключения к wss://echo.websocket.org...
            </div>
          )}
          {logs.map(log => (
            <div
              key={log.id}
              className={styles.terminalLine}
            >
              <span className={styles.timestamp}>[{log.time}]</span>
              <span>{log.msg}</span>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <Button
            onClick={() => sendMessage('Привет!')}
            variant="contained"
          >
            Отправить сообщение
          </Button>

          <div
            className={`${styles.statusIndicator} ${isConnected ? styles.online : ''}`}
          >
            <div className={styles.dot} />
            {isConnected ? 'Connected' : 'Disconnected'}
          </div>
        </div>
      </div>
    </div>
  );
};
