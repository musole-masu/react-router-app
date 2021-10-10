import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote.js"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail.js"));
const NoPageFound = React.lazy(() => import("./pages/NoPageFound.js"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes.js"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NoPageFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
