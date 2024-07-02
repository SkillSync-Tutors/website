import { tutorData } from '~/constants';
import Image from 'next/image';

const Page = ({ params }): { params: { id: number } } => {
  const tutorId = params.id;
  const { name, image, about, school, teachables } = tutorData[tutorId];

  return (
    <div className="mt-12 mx-40 flex flex-col justify-center">
      <div className="text-5xl text-center">{name}</div>
      <div className="my-10 justify-center flex">
        <Image src={image} width={650} height={650} alt={name} />
      </div>
      <div className="mb-4">{school}</div>
      <div className="mb-4">{about}</div>
      <div className="mb-4">Teachable Subjects: {teachables.join(', ')}</div>
      <div className="mx-auto bg-teal-800 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300">
        Book Now
      </div>
    </div>
  );
};

export default Page;
