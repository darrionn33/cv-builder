const QualificationsTable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Insititute Name</th>
          <th>Qualification</th>
          <th>Year of Passing</th>
        </tr>
        {props.qualifications.map((qualification, index) => (
          <tr key={index}>
            <td>{qualification.name}</td>
            <td>{qualification.qualification}</td>
            <td>{qualification.yearOfPassing}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QualificationsTable;
