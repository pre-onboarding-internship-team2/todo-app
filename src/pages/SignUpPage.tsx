import SignForm from 'components/auth/SignForm';

const SignUpPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-6">회원가입</h2>
      <SignForm pageType="signup"/>
    </div>
  )
}

export default SignUpPage