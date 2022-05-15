import '@/styles/globals.css'
import { Nav, Header, Layout, Footer} from '@/components'
import { wrapper } from '@/modules/store.js'
import withReduxSaga from 'next-redux-saga';
import "@/styles/globals.css";
import PropTypes from "prop-types";


const App = ({ Component }) => {
  return (<div>
    <Nav/>
      <Header className='AppMinHeight'/>
      <Layout>
        <Component/>
      </Layout>
      <Footer/>
      </div>
    )
}
App.propTypes = {
  Component: PropTypes.elementType,
};

export default wrapper.withRedux(withReduxSaga(App))
