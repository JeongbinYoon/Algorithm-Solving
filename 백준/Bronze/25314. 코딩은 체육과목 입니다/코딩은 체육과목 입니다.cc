#include<bits/stdc++.h>
using namespace std;
int a;
string str;
int main(){
    cin >> a;
    int n = a/4;
    for(int i = 0; i < n; i++){
        str += "long ";
    }
    cout << str << "int" << '\n';
    return 0;
}