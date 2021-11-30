import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div>
            <div className="row">
                <table class="highlight col-md-3">
                    <thead class="thead-inverse">
                        <tr>
                            <th>mAMOUNE</th>
                            <th>Alioune</th>
                            <th>BaYE cHEIKH</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">dIop</td>
                                <td>fall</td>
                                <td>fall</td>
                            </tr>

                        </tbody>
                </table>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
