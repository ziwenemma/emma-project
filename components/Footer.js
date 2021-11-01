function Footer() {
  return (
    <div>
    <footer className="sm:py-5 bg-black bg-opacity-90">
  <div className="container mx-auto px-3">
    <div className="sm:flex sm:flex-wrap  md:py-4 justify-evenly">
      <div className="px-4">
        <h5 className="text-2xl font-bold text-white mb-6">Follow US</h5>
        <ul className="footer-links">           
          <li className="mb-2">
            <a href="#" className="transparent hover:text-purple-400">Instagram</a>
          </li>
    
          <li className="mb-2">
            <a href="#" className="transparent hover:text-purple-400">Facebook</a>
          </li>
        </ul>
      </div>
      
      <div className="px-4">
        <h5 className="text-2xl text-white font-bold mb-6">About</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="transparent  hover:text-purple-400">History</a>
          </li>
        </ul>
      </div>
      <div className="px-4">
        <h5 className="text-2xl text-white font-bold mb-6">Help</h5>
        <ul className="list-none footer-links">
          <li class="mb-2">
            <a href="#" className="transparent hover:text-purple-400">Support</a>
          </li>         
        </ul>
      </div>
        </div>

    <div class="sm:flex sm:flex-wrap  border-t  border-white justify-evenly">
      <div class="px-4 pt-2">
        <h6 class="font-bold text-2xl text-white mb-2">Address</h6>
        <address class="not-italic mb-4 text-sm">
          ChengDu
        </address>
      </div>
      <div class="px-4 pt-2">
        <h6 class="font-bold text-2xl text-white mb-2">Email</h6>
        <p class="mb-4 text-sm">973051062@qq.com</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
