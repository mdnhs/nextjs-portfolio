import { Image } from "@nextui-org/image";
import NextImage from "next/image";

type ImagesProps = {
  img: any;
};

export const Images = (props: ImagesProps) => {
  return (
    <Image
      isZoomed
      // as={NextImage}
      width={200}
      height={200}
      radius="full"
      alt="NextUI hero Image with delay"
      src={"/images/profile.jpg"}
      loading="lazy"
    />
  );
};
