export default function Input(props) {


  return (
    <input
      type="number"
      id="passwordSize"
      min={1}
      required
      value={props.passwordSize}
      onChange={(ev) => props.setPasswordSize(ev.target.value)} />
  )
}