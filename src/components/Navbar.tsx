import Link from "next/link";
import { BookOpenCheck } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-100 p-0">
      <div className="container">
        <div className="flex-1">
          <Link href='/'><BookOpenCheck color="purple" size={32} /></Link>
        </div>
        <div className="flex-none">
            <Link href='/create' className="btn btn-ghost">Create Post</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
