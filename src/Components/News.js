import React, { Component } from "react";
import Loader from "../Loader";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    PageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    PageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [
    {
      source: { id: "lequipe", name: "L'equipe" },
      author: "L'EQUIPE",
      title:
        "L'arbitre italien de Lille-Chelsea en passe d'être suspendu en Serie A",
      description:
        "Impliqué dans une polémique en Serie A, Davide Massa, l'arbitre italien qui arbitrera ce mercredi (21 heures) le 8e de finale retour de Ligue des champions entre Lille et Chelsea, devrait, selon Sky Sports, être prochainement écarté des terrains.",
      url: "https://www.lequipe.fr/Football/Actualites/L-arbitre-italien-de-lille-chelsea-en-passe-d-etre-suspendu-en-serie-a/1322426",
      urlToImage:
        "https://medias.lequipe.fr/img-photo-jpg/davide-massa-arbitrera-lille-chelsea-ce-mercredi-maurice-van-steen-anp-sport-presse-sports/1500000001618502/0:0,1995:1330-640-427-75/8a56e.jpg",
      publishedAt: "2022-03-16T10:53:00+00:00",
      content:
        "Selon Sky Sports, Davide Massa, arbitre du huitième de finale retour de Ligue des champions entre Lille et Chelsea ce mercredi (21 heures, à suivre en direct commenté) ne devrait plus officier en pre… [+1375 chars]",
    },
    {
      source: { id: "news24", name: "News24" },
      author: "Sibusiso Mjikeliso",
      title:
        "Suspended WP president Zelt Marais kicked out of SA Rugby meeting with Parliament",
      description:
        "Suspended Western Province Rugby Union president Zelt Marais was on Wednesday morning booted out of SA Rugby's meeting with the parliamentary sports portfolio committee meeting.",
      url: "https://www.news24.com/sport/rugby/springboks/suspended-wp-president-zelt-marais-kicked-out-of-sa-rugby-meeting-with-parliament-20220316",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/1151/897bcee5ab0a46b6b2469f4a2b6449e1.jpg",
      publishedAt: "2022-03-16T10:14:18+00:00",
      content:
        "<ul><li>Suspended WP president Zelt Marais was removed from SA Rugby's meeting with Parliament on Wednesday morning.</li><li>Marais recently refused to acknowledge that his union was under the admini… [+2039 chars]",
    },
    {
      source: { id: "nrk", name: "NRK" },
      author: "NRK",
      title: "De siste sportsnyhetene fra NRK",
      description: "Her får du de siste sportsnyhetene fra NRK.",
      url: "https://www.nrk.no/sport/sportsnyheter-1.14660227#1.15895008.1.15895008",
      urlToImage:
        "https://gfx.nrk.no/7kT5zGoE2E-GnUKLojH1PQ0I1Nze4Ypu8lxM-oBjubQw.jpg",
      publishedAt: "2022-03-16T10:07:34.6272643Z",
      content:
        "15. mars2022kl.11:09Omar Elabdellaoui er tatt ut i landslagsstroppen etter at han pådro seg en øyeskade i en fyrverkeriulykke på nyttårsaften.\r\n Vi har hatt jevn dialog hele veien, uten at jeg har ri… [+1153 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: null,
      title: "USA TODAY Sports Brackets",
      description:
        "Create men’s and women’s tournament brackets and make your picks before the tournaments begin.",
      url: "https://brackets.usatoday.com",
      urlToImage:
        "https://brackets.usatoday.com/wp-content/uploads/sites/98/2020/03/cropped-favicon.png",
      publishedAt: "2022-03-14T05:57:38+00:00",
      content: "© Copyright USA TODAY Sports Brackets 2022",
    },
    {
      source: { id: "recode", name: "Recode" },
      author: "Peter Kafka",
      title: "Will Apple or Google slow sports betting on your phone?",
      description:
        "Phone users are betting billions on sports. Will anything slow that down?",
      url: "https://www.vox.com/recode/22947732/phones-sports-betting-gambling-apple-google-march-madness",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/vRlrdmNupdJzoM5R7C39jtet2aE=/0x0:5520x2890/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23303883/1150786897.jpg",
      publishedAt: "2022-03-13T11:30:00Z",
      content:
        "Remember when we decided that spending too much time on our phones was a bad thing? That immersing ourselves in our iPhones could be unhealthy, or even addictive?\r\nThat was a couple of years ago. So … [+8004 chars]",
    },
    {
      source: {
        id: "the-washington-times",
        name: "The Washington Times",
      },
      author: "The Washington Times http://www.washingtontimes.com",
      title: "Latest Quizzes",
      description:
        "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
      url: "https://www.washingtontimes.com/quiz/",
      urlToImage: null,
      publishedAt: "2021-02-10T03:52:37.2719772Z",
      content:
        "Featured Quizzes\r\nAttention all William Shakespeare experts. Pinpoint the prose's origin plucked from one of his many famous plays in this multiple-choice challenge.\r\n Shares \r\nName these legendary c… [+32652 chars]",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      Page: 1,
    };
    // document.title = `NewsApp - ${category}`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.Page}&apiKey=${this.props.apiKey}&pageSize=${this.props.PageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.PageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  // handlePresClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   this.props.country
  //   // }&category=${
  //   //   this.props.category
  //   // }&apiKey=${this.props.apiKey}&page=${
  //   //   this.state.Page - 1
  //   // }&pageSize=${this.props.PageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // this.setState({
  //   //   articles: parseData.articles,
  //   //   Page: this.state.Page - 1,
  //   //   loading: false,
  //   // });
  //   this.setState({ Page: this.state.Page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   // if (
  //   //   !(
  //   //     this.state.Page + 1 >
  //   //     Math.ceil(this.state.totalResults / this.props.PageSize)
  //   //   )
  //   // ) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //     this.props.country
  //   //   }&category=${
  //   //     this.props.category
  //   //   }&apiKey=${this.props.apiKey}&page=${
  //   //     this.state.Page + 1
  //   //   }&pageSize=${this.props.PageSize}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parseData = await data.json();
  //   //   this.setState({
  //   //     articles: parseData.articles,
  //   //     Page: this.state.Page + 1,
  //   //     loading: false,
  //   //   });
  //   // }
  //   this.updateNews();
  //   this.setState({ Page: this.state.Page + 1 });
  // };

  fetchData = async () => {
    this.setState({ Page: this.state.Page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.Page}&apiKey=${this.props.apiKey}&pageSize=${this.props.PageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      // loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ marginTop: "10%" }}>
          Top News headlines
        </h1>
        {/* {this.state.loading && <Loader />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader />}
        >
          <div className="row my-3 m-0">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between mb-3">
          <button
            disabled={this.state.Page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePresClick}
          >
            Previous Page
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.Page + 1 >
              Math.ceil(this.state.totalResults / this.props.PageSize)
            }
          >
            Next Page
          </button>
        </div> */}
      </div>
    );
  }
}
