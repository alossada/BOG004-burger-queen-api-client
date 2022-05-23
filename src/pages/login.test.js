import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import LoginForm from './login.jsx'

test('rendering and submitting a basic Formik form', async () => {
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />)
    const user = userEvent.setup()
  
    await user.type(screen.getByLabelText(/email/i), 'chef@burger.com')
    await user.type(screen.getByLabelText(/password/i), '123456')
    
  
    await user.click(screen.getByRole('button', {email: /submit/i}))
  
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        email: 'chef@burger.com',
        password: '123456',
      }),
    )
  })