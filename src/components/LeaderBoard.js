import React, {Component} from 'react';


export default class LeaderBoard extends Component {
  /*constructor(props) {
    super(props);
      
  }*/
  render() {
    return (
      <div className="row">
            <div className="table-responsive col-sm-6">
                <h4>Chart Toppers</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">Firstname</th>
                            <th className="text-center">Lastname</th>
                            <th className="text-center">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="bg-success">John</td>
                            <td className="bg-success">Doe</td>
                            <td className="bg-success">john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                         <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                         <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
             </div>
             <div className="table-responsive col-sm-6">
                <h4>Chart Toppers</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">Firstname</th>
                            <th className="text-center">Lastname</th>
                            <th className="text-center">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td className="bg-danger">July</td>
                            <td className="bg-danger">Dooley</td>
                            <td className="bg-danger">july@example.com</td>
                        </tr>
                    </tbody>
                </table>
             </div>
      </div>
    );
  }
}