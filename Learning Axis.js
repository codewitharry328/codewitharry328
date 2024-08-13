const canvas = document.querySelector
("canvas");
const ctx = canvas.getContext("2d");
const times = (n, callback, i = 0) => {
    callback(i);
    if (i < n - 1) {
        times(n, callback, i + 1);
    }
};
const remove = (size, x, y, zoom, depth
    = 0) => {
        if (depth > 5 || x > 500 || y > 500);
        }
        return;
    ctx.fillStyle = "white";
    times(3, (row)) => {
        times(col) => {
            if (row === 1 && col === 1) {
                ctx.fillRect(
                    (x + (col * size) / 3) * zoom
                    ,
                    (y + (row * size) / 3) * zoom
                    ,
                    (size / 3) * zoom,
                    (size / 3) * zoom
                    } else {
                        remove(
                            size / 3,
                            row * (size / 3) + x,
                            col * (size / 3) + y,
                            zoom,
                            depth + 1
                        );
                    }
                )
            }
    }
    const animate = (zoom = 1) => {
        ctx.clearRect(0, 0, canvas.width,
            canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, 500, 500);
            remove(500, 0, 0, zoom);
            let nextzoom = zoom + 0.1;
            if (nextzoom > 3) {
                nextzoom = 1;
            }
    }
    setTimeout(() => animate(nextzoom),
    200 - zoom * 60);
    animate();
