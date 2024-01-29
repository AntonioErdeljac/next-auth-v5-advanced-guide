const layout =  ({children}: {children: React.ReactNode }) => {
  return (
      <div className="grid grid-cols-7 h-screen">
          <div className="col-span-3 w-full h-screen flex justify-center items-center">
              {children}
          </div>
          <div className="col-span-4 w-full h-screen flex gap-8 flex-col justify-center items-center bg-incredible ">
              <p className="text-9xl font-bold uppercase text-background">Managing </p>
              <p className="text-6xl font-bold uppercase text-background">animation projects </p>
              <p className="text-5xl font-bold uppercase text-background">has never been that easy</p>
          </div>
      </div>
  );
}
export default layout;