import '../assets/styles/footer.css'

export default {
	data () {
		return {
			author: 'will'
		}
	},
	render() {
		return (
			<div id="footer"> written by {this.author} </div>
		)
	}
}