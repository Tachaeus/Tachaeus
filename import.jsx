//Start with this in the:
import Header from "./Header";
import Footer from "./Footer";

export default function Page() {
    return (
        <div className= "min-h-screen flex flex-col items-center justify-center text-center">
            <header />
            <main clasName= "p-4">
                <h1 clasName= "text-2x1 font-bold">Welcome To My React Page</h1>
                <p>This is a simple example with two components.</p>
            </main>
            <footer />
        </div>
    );
}

//Then we do this...in the:
export default function Header() {        
         return (
             <header className= "w-full bg-blue-500 text-white p-4 textc-center">
                 <h2 className= "text-lg font-semibold">My Website Header</h2>   
             </header>
        );
        }

//And this,...in the:
export default function Footer() {        
    return (
        <footer className= "w-full bg-blue-500 text-white p-4 textc-center">
            <p>&copy; {new Date().getFullYear()}My Website</p>   
        </footer>
   );
   }