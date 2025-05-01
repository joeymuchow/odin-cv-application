function GenInfoDisplay({ generalInfo }) {
  const phoneNumber = `(${generalInfo.phone.slice(0,3)}) ${generalInfo.phone.slice(3,6)}-${generalInfo.phone.slice(6,10)}`;

  return (
    <>
      <h2>{`${generalInfo.firstName} ${generalInfo.lastName}`}</h2>
      <p>{generalInfo.email}</p>
      <p>{phoneNumber}</p>
    </>
  );
}

export default GenInfoDisplay;