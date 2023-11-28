const WorkXPTable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Company Name</th>
          <th>Designation</th>
          <th>Date of Joining</th>
          <th>Date of Exiting</th>
        </tr>
        {props.workXP.map((experience, index) => (
          <tr key={index}>
            <td>{experience.name}</td>
            <td>{experience.designation}</td>
            <td>{experience.dateOfJoining}</td>
            <td>{experience.dateOfExiting}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkXPTable;
