function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Savory</h3>
            <p className="text-gray-400">
              Experience fine dining at its best with our carefully crafted dishes and elegant atmosphere.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/menu" className="text-gray-400 hover:text-white transition">Menu</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="/reservations" className="text-gray-400 hover:text-white transition">Reservations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Restaurant Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@savory.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 11am - 10pm</li>
              <li>Saturday: 10am - 11pm</li>
              <li>Sunday: 10am - 9pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Savory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 