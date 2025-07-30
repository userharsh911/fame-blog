import React, { forwardRef,useId } from 'react'
import Button from './Button'

const Input = forwardRef(({
    label,
    type="text",
    className='',
    placeholder='',
    setShowPassword,
    showPassword,
    ...props

},ref) => {
    const id = useId()
return (
    <div>
        {
            label && (
                <div>
                    <label htmlFor={id} className='inline-block mb-1 text-base text-gray-700 font-medium'>
                            {label}
                    </label>
                </div>
            )
        }
        <div>
            <input id={id} type={type} className={`${className}`} placeholder={placeholder} ref={ref} {...props} />
            {setShowPassword && (
                <Button
                    type='button'
                    className="w-full text-sm cursor-pointer text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 mb-4"
                    onClick={()=>setShowPassword((val)=>!val)}
                >
                    {showPassword ? 'hide ' : 'show '}password
                </Button>
            )}
        </div>
    </div>
)
})

export default Input