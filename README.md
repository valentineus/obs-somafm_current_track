# Notification about the current track

Pop-up notification about the currently playing music track.
Uses playlists of a non-commercial radio station
[SomaFM](https://somafm.com/).
Created specially for
[Open Broadcaster Software](https://obsproject.com/).

* [Support SomaFM](https://somafm.com/support/);
* [Demo](https://valentineus.link/obs-somafm-current-track/?radio=defcon);

## Using

```url
https://valentineus.link/obs-somafm-current-track/?radio=defcon
```

Open the page by specifying the GET parameter `radio`.
This is necessary to the script receives the data of the desired radio.
A list of available radio stations can be found
[here](https://somafm.com/listen/).

## Development

To start a local server for development, you need:

1. Clone the source repository:

```bash
git clone "https://github.com/valentineus/obs-somafm-current-track.git"
```

2. Install packages:

```bash
cd "obs-somafm-current-track" && bundle update
```

3. Start the server:

```bash
bundle exec jekyll serve --host "${IP}" --port "${PORT}" --trace
```

Please note in the executable command uses environment variables `IP` and `PORT`.

## License

<img width="256px" alt="MIT License" src="https://raw.githubusercontent.com/valentineus/valentineus.github.io/master/assets/images/7d05cad0-d553-42c7-be1f-7007926ba720.png" />

[MIT](LICENSE.txt).
Copyright (c)
[Valentin Popov](https://valentineus.link/).
