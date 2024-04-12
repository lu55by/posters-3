
varying vec2 vUv;

void main () {
    
    vec2 uv = vUv;

    // Pattern
    float middleDis = distance(uv, vec2(.5));
    float alpha = .2 / middleDis;

    // vec3 color = vec3(1., 1., 1.);
    vec3 color = vec3(middleDis);

    gl_FragColor = vec4(color, alpha);
    // gl_FragColor = vec4(middleDis, alpha);

}