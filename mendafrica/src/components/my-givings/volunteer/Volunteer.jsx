import Link from "next/link";
import Image from "next/image";
import "./styles.scss";

function Volunteer() {
  return (
    <section className="volunteer">
      <div className="empty">
        <h1 className="empty-title">There are no volunteer opportunities available right now</h1>
        <Link href="/volunteer" className="action-button volunteer-now">
          Check Back Later
        </Link>
      </div>
    </section>
  );
}

export default Volunteer;
