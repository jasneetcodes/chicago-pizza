import { Link } from "react-router-dom";

export default function CallSticky() {
  return (
    <>
      <Link className="callButton click" to="tel:+14039844800">
        <i class="fa-solid fa-phone"></i>
      </Link>
    </>
  );
}
