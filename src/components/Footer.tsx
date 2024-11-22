export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="animate-fadeIn">
          &copy; {new Date().getFullYear()} M Yazid Ar-Rosyadi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
