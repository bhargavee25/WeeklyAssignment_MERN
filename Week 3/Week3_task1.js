import { useState } from 'react';

export function TextUpdater() {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Type something..."
        className="border p-2 w-full rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-lg text-gray-700">You typed: {text}</p>
    </div>
  );
}
