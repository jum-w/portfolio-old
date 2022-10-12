import Image from "next/image";

const ProjectPopup = ({ visible, img }) => {
  if (visible === true)
    return (
      <div className="mb-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-30 backdrop-blur-sm">
        <Image src={img} width={1256} height={700} quality={100} />
      </div>
    );
};

export default ProjectPopup;
