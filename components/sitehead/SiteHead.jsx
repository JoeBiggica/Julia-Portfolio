import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';

const domain = 'https://julia-portfolio.vercel.app';

class SiteHead extends PureComponent {

	static propTypes = {
		meta: PropTypes.arrayOf(
			PropTypes.shape({
				tag: PropTypes.string.isRequired,
				props: PropTypes.object.isRequired,
			})
		).isRequired,
	}

	static defaultProps = {
		meta: [],
	}

	renderTag = ({tag: Tag, props}, index) => (
		<Tag key={`tag-${index}`} {...props} />
	);

	componentDidMount() {
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-165823635-1');
	}

	render() {
		return (
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta httpEquiv='x-dns-prefetch-control' content='on' />
				<meta name='viewport' content='width=device-width, user-scalable=no' />
				<meta name='robots' content='index, follow' />
				<title>Julia Endow</title>

				<meta name='description' content="Julia Endow" />
				<meta name='keywords' content='' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:image' content='https://julia-portfolio.vercel.app/static/julia-social-logo.png' />

				<meta property="fb:app_id" content="926660327777500"/>
				<meta name='og:title' property="Julia Endow" />
				<meta property='og:description' content="Julia Endow's art direction and design portfolio" />
				<meta property="og:type" content="website" />
				<meta property='og:url' content='https://julia-portfolio.vercel.app/' />
				<meta property='og:image' content='https://julia-portfolio.vercel.app/static/julia-social-logo.png' />

				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='msapplication-config' content='none' />
				<meta name='theme-color' content='#780C42' />

				<link rel="canonical" href='https://julia-portfolio.vercel.app' />
				<link rel='shortcut icon' type='image/x-icon' href='https://julia-portfolio.vercel.app/static/favicon/favicon.png' />
				<link rel='icon' type='image/png' href='https://julia-portfolio.vercel.app/static/favicon/favicon.png' sizes='16x16' />
				<link rel='icon' type='image/png' href='https://julia-portfolio.vercel.app/static/favicon/favicon-32x32.png' sizes='32x32' />
				<link rel='icon' type='image/png' href='https://julia-portfolio.vercel.app/static/favicon/favicon-48x48.png' sizes='48x48' />
				<link rel='icon' type='image/png' href='https://julia-portfolio.vercel.app/static/favicon/favicon-96x96.png' sizes='96x96' />

				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-165823635-1"></script>

				{this.props.meta.map(this.renderTag)}
			</Head>
		);
	}

}

const mapStateToProps = state => {
	return {
		meta: state.meta
	};
};

export default connect(mapStateToProps)(SiteHead);
