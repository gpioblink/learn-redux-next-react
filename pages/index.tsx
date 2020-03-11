import {
    NextPageContext,
    NextComponentType,
} from 'next';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import Page from '../containers/page';
import {addTodo} from '../actions';
import {Store} from '../store';

interface IndexPageContext extends NextPageContext {
    store: Store;
};

const IndexPage: NextComponentType<IndexPageContext> = compose()(Page);

IndexPage.getInitialProps = ({store, req}) => {
    const isServer: boolean = !!req;

    const {todo} = store.getState();
    store.dispatch(addTodo(Object.assign(todo.item, {
        value: 'Hello world!',
    })));

    return {
        isServer,
    };
};

export default connect()(IndexPage);