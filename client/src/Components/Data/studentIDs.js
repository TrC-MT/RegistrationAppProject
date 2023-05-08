export default function StudentIDs({ render }) {
  let options = [];
  for (let i = 0; i < render.students.length; i++) {
    const studentIdentifier =
      render.students[i].last_name + ", " + render.students[i].first_name;
    options[i] = <option value={render.students[i].id}>{studentIdentifier}</option>;
  }
  const result = options.filter((option) =>
    option.props.value.toString().includes(`${render.filter}`)
  );
  return result;
}
