export const Debug = ({ systemState }) => {
  return (
    <div>
      <div>
        Registers
        <ul>
          <li>B:</li>
          <li>C:</li>
          <li>D:</li>
          <li>E:</li>
          <li>PC:</li>
          <li>SP:</li>
          <li>A:</li>
        </ul>
        <div>
          <ul>
            <li>Carry:</li>
            <li>Auxilary Carry:</li>
            <li>Sign:</li>
            <li>Zero:</li>
            <li>Parity:</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};
