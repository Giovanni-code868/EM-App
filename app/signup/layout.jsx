import Image from "next/image";
import authimg from "@/public/authimg.png";

const Layout = ({ children }) => {
    return (
        <div className={`grid grid-cols-2 gap-4 h-screen`}>
            {/* column 1 */}
            <section className={`bg-slate-400 flex items-center justify-center p-10`}>
                <div style={{ position: `relative`, width: `100%`, height: `100%` }}>
                    <Image fill objectFit={`contain`} src={authimg} alt={`auth-img`} />
                </div>
            </section>
            {/* column 2 */}
            <section>{/* insert children  here */}</section>
        </div>
    );
};
export default Layout;