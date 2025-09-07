import { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import { rawFileAtom, messagesAtom } from './stores/global';
import MessageViewer from './components/MessageViewer/MessageViewer';
import Sidebar from './components/Sidebar/Sidebar';
import * as S from './style';

import chatZip from './assets/chat.zip';

function App() {
  const messages = useAtomValue(messagesAtom);
  const setRawFile = useSetAtom(rawFileAtom);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) =>
      document.documentElement.classList.toggle('ctrl-down', e.ctrlKey);

    document.addEventListener('keydown', keyHandler);
    document.addEventListener('keyup', keyHandler);

    // Load bundled chat.zip on startup
    fetch(chatZip)
      .then(res => res.arrayBuffer())
      .then(buf => setRawFile(buf))
      .catch(() => {
        // Failed to load bundled chat.zip
      });

    return () => {
      document.removeEventListener('keydown', keyHandler);
      document.removeEventListener('keyup', keyHandler);
    };
  }, []);

  return (
    <>
      <S.GlobalStyles />
      <S.Container>
        <S.Header />
        <MessageViewer />
        {messages.length > 0 && <Sidebar />}
      </S.Container>
    </>
  );
}

export default App;
