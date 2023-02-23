import SignForm from 'components/auth/SignForm';
import Layout from 'components/auth/Layout'
const SignInPage = () => {

  return (
    <Layout title="로그인">
        <SignForm pageType="signin"/>
    </Layout>
  )
}

export default SignInPage