const Page = ({ params }): { params: { id: number } } => {
  const tutorId = params.id;

  return (
    <div>
      {tutorId}
    </div>
  );
};

export default Page;
