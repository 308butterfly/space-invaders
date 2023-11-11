export default function startEmulation(rom, toScreen) {
  rom.forEach(byte => {
    toScreen(byte);
  });
}
