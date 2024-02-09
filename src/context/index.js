
import React from 'react';
import { CharacterProvider } from './CharacterContext/CharacterContext';

export function AppContextManager({ children }) {
  return (
    <CharacterProvider>
      {/* charactor flow Context Provider */}
      {children}
    </CharacterProvider>
  )
}

export default AppContextManager

