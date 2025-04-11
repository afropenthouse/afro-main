
import "./styles.scss";
import Image from "next/image";
import values from "../../../public/values.svg"

export default function Values() {
  return (
    <>
     <Image alt="" src={values} priority={true} />
    </>
  );
}
