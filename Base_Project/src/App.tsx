import React from 'react'

function App() {

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 p-5'>
      <h1 className='text-4xl font-bold text-white'>Hello, World!</h1>
      <p className='mt-4 text-lg text-gray-400 text-center'>Bienvenido a esta nueva aplicación. Aquí podrás conocer y explorar más sobre los diferentes componentes que están predefinidos y utilizarlos en los proyectos que necesites. Lo mejor de todo: Es perzonalizable! El límite es tu imaginación, ve los componentes y diviértete creando.</p>

      <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl'>
        <div className='bg-gray-800 p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-white'>Custom Button</h2>
          <p className='mt-2 text-gray-400'>Te permite tener un botón completamente perzonalizable tanto en color como en acción.</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-white'>Custom Input</h2>
          <p className='mt-2 text-gray-400'>Descripción del componente 2.</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-white'>Componente 3</h2>
          <p className='mt-2 text-gray-400'>Descripción del componente 3.</p>
        </div>
      </div>
    </div>
  )
}

export default App
