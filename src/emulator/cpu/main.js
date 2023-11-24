import nop from './misc';
import jump from './jump-calls';

export const Intel8080 = {
  registers: {
    B: new Uint8Array(1),
    C: new Uint8Array(1),
    D: new Uint8Array(1),
    E: new Uint8Array(1),
    A: new Uint8Array(1),
    F: new Uint8Array(1),
    PC: new Uint16Array(1),
    SP: new Uint16Array(1),
  },
};

const opcodeTable = {
  0x00: () => nop(),
  0xc3: (byte1, byte2) => jump(),
  // ... other opcodes
};

export function executeOpcode(opcode) {
  const operation = opcodeTable[opcode];
  if (operation) {
    operation();
  } else {
    console.error(`Unknown opcode: ${opcode}`);
  }
}
