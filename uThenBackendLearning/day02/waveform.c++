#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
    cout<<"Enter the row and col";
    int n,m;
    cin>>n>>m;
    vector<vector<int>>matrix(n,vector<int>(m,0));

    cout<<"Enter the elements of an array";

    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cin>>matrix[i][j];
        }
    }

    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cout<<matrix[i][j]<<"  ";
        }
        cout<<endl;
    }

    cout<<"Enter the k for k times rotation";
    int A;
    cin>>A;

    vector<vector<int>>ans=matrix;
        
        for(int i=0;i<A%4;i++)
        {
            for(int k=0;k<n;k++)
            {
                for(int i=0;i<n;i++)
                {
                    ans[i][n-k-1] = matrix[k][i];
                }
            }
            matrix = ans;
        }
        
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            matrix[i][j] = ans[i][j];
        }

        for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cout<<matrix[i][j]<<"  ";
        }
        cout<<endl;
    }

}

