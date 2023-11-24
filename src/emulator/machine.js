import Intel8080 from '../emulator/cpu/main';

export const machine = {
  Intel8080: Intel8080,
  ROM: new Uint8Array(8192),
  RAM: new Uint8Array(1024),
  'Video RAM': new Uint8Array(7168),
  'RAM mirror': new Uint8Array(1024),
  inputPort0: new Uint8Array(1),
  inputPort1: new Uint8Array(1),
  inputPort2: new Uint8Array(1),
  inputPort3: new Uint8Array(1),
  outputPort2: new Uint8Array(1),
  outputPort3: new Uint8Array(1),
  outputPort5: new Uint8Array(1),
  outputPort6: new Uint8Array(1),
};
