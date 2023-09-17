import React from 'react'
import { fileIcon } from '../assets'
import { useSnapshot } from 'valtio'

import state from '../store'

import { CustomButton } from '../components'

const FilePicker = ({file, setFile, readFile}) => {

  const snap = useSnapshot(state);

  return (
    <div className='filepicker-container !bg-slate-200 !bg-opacity-90'>
      <div className='flex-1 flex flex-col'>
        <input
          id= "file-upload"
          type='file'
          accept='image/*'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>

        <p className='mt-4 text-gray-500 text-xs truncate'>
          <img src={fileIcon} alt='file icon' className='inline-block mr-1 w-5' />
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton
          type='outline'
          title='Logo'
          handleClick={() => readFile('logo')}
          customStyles='text-xs'
        />
        <CustomButton
          type='filled'
          title='Full'
          handleClick={() => readFile('full')}
          customStyles='text-xs'
        />
      </div>
    </div>
  )
}

export default FilePicker