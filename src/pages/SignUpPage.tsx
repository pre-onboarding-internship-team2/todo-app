import SignForm from 'components/auth/SignForm';
import Layout from 'components/auth/Layout'

const SignUpPage = () => {
  return (
    <Layout title="회원가입">
        <SignForm pageType="signup"/>
    </Layout>
  )
}

export default SignUpPage