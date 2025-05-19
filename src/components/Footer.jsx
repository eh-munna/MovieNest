export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <span className="font-semibold">MovieNest</span>. All rights
            reserved.
          </p>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
