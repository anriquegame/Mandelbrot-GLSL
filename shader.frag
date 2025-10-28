#version 460 core
out vec4 FragColor;

in vec2 texCoord;

vec2 resolution = vec2(800.0,600.0);

void main()
{
    vec2 uv = ((gl_FragCoord.xy/resolution)-vec2(0.5))*2.0;
    uv.x = (uv.x * resolution.x / resolution.y) - 0.5;
    float max_i = 1000.0;
    float zreal = uv.x;
    float zimag = uv.y;
    for (float i = 0; i <= max_i; i++){
        if (zreal*zreal + zimag*zimag <= 4.0){
            // z = (z)**2 + real|uv.x + imag|uv.y = (zreal + zimag)**2 + uv.x + uv.x = zreal*zreal - zimag*zimag + 2*zreal*zimag + uv.x + uv.y
            float nzreal = zreal*zreal - zimag*zimag + uv.x;
            float nzimag = 2*zreal*zimag + uv.y;
            zreal = nzreal;
            zimag = nzimag;
            if (i == max_i-1){
                FragColor = vec4(0.0, 0.0, 0.0, 1.0); // black is inside mandelbrot
                break;
            }
        }
        else{
            FragColor = vec4(1.0, 1.0, 1.0, 1.0); // white is outside mandelbrot
            break;
        }
    }
}