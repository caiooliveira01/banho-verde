import User from "./User";
import Weather from "./Weather";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-4 w-full bg-darkgreen text-platinum shadow-sm">
      <div className="flex w-full gap-3 justify-between items-center max-w-6xl">
        <h1 className="text-2xl font-medium">
          Banho<span className="text-mindaro text-3xl">Verde</span>
        </h1>

        <div className="flex gap-6 justify-between items-center">
          <Weather />
          <User />
        </div>
      </div>
    </header>
  );
}
