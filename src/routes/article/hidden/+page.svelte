<div id="target" />
<div id="text-content" />

<p source-code="https://github.com/PwnFunction/Blank-Rick-Roll" />

<style global>
	/*
	html {
		display: flex;
		height: 100vh;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: #222;
	}
*/
	div#text-content::before,
	div#text-content::after {
		font-weight: bold;
		font-family: 'SF Mono', 'Courier New', Courier, monospace;
		font-size: 42px;
		color: #ff4473;
	}

	div#text-content {
		align-self: center;
	}

	div#target {
		display: block;
		background-image: url(https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif);
		height: 20rem;
		width: 20rem;
		background-repeat: no-repeat;
		background-size: cover;
		border: 5px solid #fff;
		border-radius: 10px;
		border-style: dashed;
		align-self: center;
	}

	div#text-content::before {
		display: inline-block;
		padding-top: 3rem;
		content: 'Never gonna give you up...';
	}

	div#text-content::after {
		margin-left: 16px;
		display: inline;
		content: 'i';
		background: #ff4473;
		animation: blink 1s infinite;
	}

	@keyframes blink {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}
</style>
