export default function StudentIDs({ render }) {
  let userRoll = render.userRoll;
  let students = render.students;
  let admins = render.admins;
  let users = [];
  if (userRoll === 'student') {
    users = students;
  } else {
    users = admins;
  }

  let options = [];
  for (let i = 0; i < users.length; i++) {
    const studentIdentifier =
      users[i].last_name + ", " + users[i].first_name;
    options[i] = (
      <option value={users[i].id}>{studentIdentifier}</option>
    );
  }
  const result = options.filter((option) =>
    option.props.value.toString().includes(`${render.filter}`)
  );
  return result;
}
