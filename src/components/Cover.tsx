const Cover = () => {

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 data-pattern"></div>
        <div className="absolute inset-0 pattern-overlay"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="relative mt-10">
              <div className="rounded-full bg-[#04d6c8]/20 p-8 backdrop-blur-sm border-2 border-[#04d6c8]/50 security-glow ">
                {/* <Shield className="h-24 w-24 text-[#04d6c8]" /> */}
                <img src="logo.png" alt="" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#04d6c8] rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#04d6c8] to-white bg-clip-text text-transparent">
            Guia de AppSec
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Seu guia em segurança no desenvolvimento de software!
          </p>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-[#04d6c8] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#04d6c8] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Cover;